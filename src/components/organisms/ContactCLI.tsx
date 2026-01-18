import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, AlertCircle, Terminal, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactFormSchema, type ContactFormData, STEPS } from '@/lib/contact-schema';
import { z } from 'zod';

/**
 * Generate a secure random ticket ID
 */
function generateTicketId(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return (array[0] % 100000).toString().padStart(5, '0');
  }
  // Fallback for SSR
  return Math.floor(Math.random() * 100000).toString().padStart(5, '0');
}

export const ContactCLI: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState<string>('');
  
  // Refs for auto-focus
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus input on step change
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const handleSelection = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors({});
    // Auto-advance for selection steps
    if (field === 'projectType' || field === 'budget') {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleInput = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (stepIndex: number): boolean => {
    try {
      if (stepIndex === 0) {
        contactFormSchema.pick({ projectType: true }).parse(formData);
      } else if (stepIndex === 1) {
        contactFormSchema.pick({ budget: true }).parse(formData);
      } else if (stepIndex === 2) {
        contactFormSchema.pick({ name: true, email: true, details: true }).parse(formData);
      }
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        // Accessing the error issues directly
        (err as z.ZodError).issues.forEach(e => {
          if (e.path[0]) newErrors[e.path[0].toString()] = e.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Project Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nDetails:\n${formData.details}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setTicketId(generateTicketId());
      setIsSuccess(true);
    } catch (error) {
      setErrors({ 
        submit: error instanceof Error ? error.message : 'Failed to submit. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 rounded-lg border border-green-500/30 bg-green-500/5 backdrop-blur-md">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-mono font-bold text-slate-800 dark:text-white mb-2">Deployment Successful</h3>
          <p className="text-slate-600 dark:text-gray-400 font-mono mb-6">
            Project configuration initialized. Our team will review the parameters and establish the uplink shortly.
          </p>
          <div className="p-4 bg-slate-100 dark:bg-black/40 rounded border border-slate-300 dark:border-white/10 w-full text-left font-mono text-sm text-slate-700 dark:text-gray-300">
            <p className="mb-1"><span className="text-green-400">➜</span> Ticket ID: #{ticketId}</p>
            <p><span className="text-green-400">➜</span> Status: <span className="text-yellow-400">PENDING_REVIEW</span></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8 px-2">
        {STEPS.map((step, idx) => (
          <div key={step.id} className="flex flex-col items-center relative z-10">
            <div 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold border-2 transition-all duration-300 shadow-md",
                idx <= currentStep 
                  ? "border-primary bg-primary text-white"
                  : "border-slate-500 dark:border-gray-700 bg-white dark:bg-gray-900 text-slate-900 dark:text-gray-500"
              )}>
              {idx < currentStep ? <Check size={16} className="text-white font-bold" strokeWidth={3} /> : idx + 1}
            </div>
            <span className={cn(
              "mt-2 text-[10px] uppercase tracking-wider font-mono font-bold transition-colors duration-300",
              idx <= currentStep ? "text-accent-red" : "text-slate-800 dark:text-gray-600"
            )}>
              {step.title}
            </span>
          </div>
        ))}
        {/* Progress Line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-800 -z-0">
          <div 
            className="h-full bg-accent-red transition-all duration-500"
            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* CLI Window */}
      <div className="rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0f0f0f] shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
          <Terminal size={14} className="text-slate-500 mr-2" />
          <span className="text-xs font-mono text-slate-600 dark:text-gray-400">config-wizard.exe</span>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-8 font-mono">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Environment */}
            {currentStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <p className="text-accent-red mb-4">? Select target environment for deployment:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['iOS App', 'Web Platform', 'UI/UX Design', 'Other'].map((opt) => {
                    const val = opt.toLowerCase().split(' ')[0];
                    return (
                      <button
                        key={val}
                        onClick={() => handleSelection('projectType', val)}
                        className={cn(
                          "text-left p-4 rounded border transition-all duration-200 hover:translate-x-1 font-medium",
                          formData.projectType === val
                            ? "border-accent-red bg-accent-red/10 text-slate-900 dark:text-white"
                            : "border-slate-400 dark:border-white/10 text-slate-900 dark:text-gray-400 hover:border-slate-600 dark:hover:border-white/30 hover:text-black dark:hover:text-gray-200"
                        )}
                      >
                        <span className="mr-2 text-accent-red">{formData.projectType === val ? '●' : '○'}</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.projectType}</p>
                )}
              </motion.div>
            )}

            {/* STEP 2: Budget */}
            {currentStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <p className="text-accent-red mb-4">? Allocated resources (Budget):</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['<5k', '5k-10k', '10k-25k', '>25k'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelection('budget', opt)}
                      className={cn(
                        "text-left p-4 rounded border transition-all duration-200 hover:translate-x-1 font-medium",
                        formData.budget === opt
                          ? "border-accent-red bg-accent-red/10 text-slate-900 dark:text-white"
                          : "border-slate-400 dark:border-white/10 text-slate-900 dark:text-gray-400 hover:border-slate-600 dark:hover:border-white/30 hover:text-black dark:hover:text-gray-200"
                      )}
                    >
                      <span className="mr-2 text-accent-red">{formData.budget === opt ? '●' : '○'}</span>
                      {opt} USD
                    </button>
                  ))}
                </div>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-2 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.budget}</p>
                )}
              </motion.div>
            )}

            {/* STEP 3: Config Details */}
            {currentStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-500 dark:text-gray-500 text-xs mb-1">--name</label>
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => handleInput('name', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-300 dark:border-white/20 py-2 text-slate-800 dark:text-white focus:border-accent-red outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-500 dark:text-gray-500 text-xs mb-1">--email</label>
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => handleInput('email', e.target.value)}
                      className="w-full bg-transparent border-b border-slate-300 dark:border-white/20 py-2 text-slate-800 dark:text-white focus:border-accent-red outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-500 dark:text-gray-500 text-xs mb-1">--details</label>
                    <textarea
                      value={formData.details || ''}
                      onChange={(e) => handleInput('details', e.target.value)}
                      rows={4}
                      className="w-full bg-transparent border border-slate-300 dark:border-white/20 p-3 text-slate-800 dark:text-white focus:border-accent-red outline-none rounded transition-colors resize-none"
                      placeholder="Describe your project requirements..."
                    />
                    {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleNext}
                    className="flex items-center px-6 py-2 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white rounded transition-colors"
                  >
                    Next Step <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Review & Deploy */}
            {currentStep === 3 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <p className="text-accent-red mb-4">! Review configuration before deployment:</p>
                <div className="bg-slate-100 dark:bg-black/40 p-4 rounded border border-slate-300 dark:border-white/10 font-mono text-sm space-y-2">
                  <div className="flex">
                    <span className="text-slate-500 dark:text-gray-500 w-24">Environment:</span>
                    <span className="text-slate-800 dark:text-white">{formData.projectType}</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 dark:text-gray-500 w-24">Resources:</span>
                    <span className="text-slate-800 dark:text-white">{formData.budget}</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 dark:text-gray-500 w-24">User:</span>
                    <span className="text-slate-800 dark:text-white">{formData.name} &lt;{formData.email}&gt;</span>
                  </div>
                </div>
                
                {errors.submit && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm font-mono flex items-center gap-2">
                    <AlertCircle size={16} />
                    {errors.submit}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="text-slate-600 dark:text-gray-500 hover:text-slate-800 dark:hover:text-white text-sm underline decoration-dotted transition-colors"
                  >
                    Reconfigure
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} />
                        Deploying...
                      </>
                    ) : (
                      <>
                        INITIALIZE PROJECT
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
