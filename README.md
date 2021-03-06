## easings-gen

**Generates libraries of named easings for various CSS preprocessors,** for use with
the CSS `transition` property. These are meant to augment CSS's limited selection of
native timing functions.

Example usage, using Stylus:

    @import "easings"

    body
      transition: color 1s ease-out-circ

Note that `ease-out-circ` is not a native CSS easing but one of the timing functions
defined by the generated libraries. The full set of provided easings can be seen in
action on [easings.net](http://easings.net). For more information on CSS transitions and
timing functions see the MDN documentation on [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) and [timing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function).

If you just want a copy of one of the output libraries, they're available [as a
gist.](https://gist.github.com/aetherised/bf4cbe13d0f0455c8b7c201ded7797c6)

The following 24 named easings are provided:

| Name | Curve |
|------|-------|
| **ease-in-sine** | `cubic-bezier(0.47, 0, 0.745, 0.715)` |
| **ease-out-sine** | `cubic-bezier(0.39, 0.575, 0.565, 1)` |
| **ease-in-out-sine** | `cubic-bezier(0.445, 0.05, 0.55, 0.95)` |
| **ease-in-quad** | `cubic-bezier(0.55, 0.085, 0.68, 0.53)` |
| **ease-out-quad** | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| **ease-in-out-quad** | `cubic-bezier(0.455, 0.03, 0.515, 0.955)` |
| **ease-in-cubic** | `cubic-bezier(0.55, 0.055, 0.675, 0.19)` |
| **ease-out-cubic** | `cubic-bezier(0.215, 0.61, 0.355, 1)` |
| **ease-in-out-cubic** | `cubic-bezier(0.645, 0.045, 0.355, 1)` |
| **ease-in-quart** | `cubic-bezier(0.895, 0.03, 0.685, 0.22)` |
| **ease-out-quart** | `cubic-bezier(0.165, 0.84, 0.44, 1)` |
| **ease-in-out-quart** | `cubic-bezier(0.77, 0, 0.175, 1)` |
| **ease-in-quint** | `cubic-bezier(0.755, 0.05, 0.855, 0.06)` |
| **ease-out-quint** | `cubic-bezier(0.23, 1, 0.32, 1)` |
| **ease-in-out-quint** | `cubic-bezier(0.86, 0, 0.07, 1)` |
| **ease-in-expo** | `cubic-bezier(0.95, 0.05, 0.795, 0.035)` |
| **ease-out-expo** | `cubic-bezier(0.19, 1, 0.22, 1)` |
| **ease-in-out-expo** | `cubic-bezier(1, 0, 0, 1)` |
| **ease-in-circ** | `cubic-bezier(0.6, 0.04, 0.98, 0.335)` |
| **ease-out-circ** | `cubic-bezier(0.075, 0.82, 0.165, 1)` |
| **ease-in-out-circ** | `cubic-bezier(0.785, 0.135, 0.15, 0.86)` |
| **ease-in-back** | `cubic-bezier(0.6, -0.28, 0.735, 0.045)` |
| **ease-out-back** | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| **ease-in-out-back** | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |

Source data taken from [easings.net](http://easings.net), by [Andrey Sitnik](https://github.com/ai).
