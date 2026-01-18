




















This is a React component that displays an error message and a button to reset the application. The component takes two props: `error` and `reset`. The `error` prop is an object containing information about the error that occurred, including an optional `digest` property. The `reset` prop is a function that can be called to reset the application.
The component uses the `useEffect` hook from React to log the error to the console whenever it changes. This is done by adding an effect that depends on the `error` prop and logs it using `console.error`.
The component renders a div element with two child elements: an h2 heading with the text "Something went wrong!" and a button with the text "Try again". The button has an onClick handler that calls the `reset` function when clicked.
          className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
