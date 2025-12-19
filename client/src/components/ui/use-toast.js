import * as React from "react";

const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, toasts: [action.toast, ...state.toasts] };
    case "REMOVE":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.id),
      };
    default:
      return state;
  }
}

export function toast(toast) {
  const id = Date.now();
  dispatch({ type: "ADD", toast: { ...toast, id } });
  return { dismiss: () => dispatch({ type: "REMOVE", id }) };
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { toast, toasts: state.toasts };
}
