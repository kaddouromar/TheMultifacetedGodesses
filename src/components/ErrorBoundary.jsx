import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            padding: "2rem",
            maxWidth: "40rem",
            margin: "2rem auto",
            fontFamily: "system-ui, sans-serif",
            color: "#fff",
            background: "#1a2a35",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <h1 style={{ marginTop: 0 }}>Something went wrong</h1>
          <p>The page could not load. Try refreshing, or run the dev server again:</p>
          <pre
            style={{
              padding: "12px",
              background: "rgba(0,0,0,0.3)",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "0.85rem",
            }}
          >
            npm run dev
          </pre>
          <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
            {this.state.error?.message}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
