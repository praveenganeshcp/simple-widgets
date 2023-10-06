
# Simple Widgets  

**Simple Widgets** is an [**Angular**](https://angular.io) component library that offers a collection of components designed to maintain a harmonious and unified user experience. These components are meticulously crafted with a consistent theme, drawing inspiration from [**material design for their color scheme**](https://m2.material.io/design/color/the-color-system.html#color-theme-creation). Notably, each component in this library is **standalone** in nature, emphasizing their self-contained design. 

This [**storybook docs**](https://main--63a11b6320c4ef99cb67aa93.chromatic.com/?path=/docs/introduction--docs) serves as the central hub for documentation, allowing developers to easily adopt and understand these standalone components. Developers can leverage Storybook as both a comprehensive reference guide and an interactive playground to explore how these components behave with various input combinations. 

> ##### NOTE : This library is built for learning purpose and not recommended to use in production.

<br />
<br />

## Sample usage


#### Install the library via NPM

```js
npm install "ngx-simple-widgets"; 
```

#### Import the component  

```js
import { SwButtonComponent } from "ngx-simple-widgets"; 

@Component({
  imports: [SwButtonComponent]
})
```

#### Use in the template

```html
<button sw-primary-button>Create Account</button>
```

#### Output
![Primary button output](https://github.com/praveenganeshcp/simple-widgets/blob/main/projects/ngx-simple-widgets/src/stories/assets/sw-primary-button-output.png)
