# tuna-ui
Minimalist CSS to start projects with speed.

***

## Installation
```
npm install tuna-ui
yarn add tuna-ui
```

***
## Usage
```
import 'tuna-ui/dist/tuna-ui.min.css';

function App() {
  return (
    <main>
      <div className="container"></div>
      <form>
        <div className="form-group">
          <label>Your email</label>
          <input type="email" />
        </div>
      </form>
    </main>
  );
}

export default App;
```

***

## Components

### Container
```
<body class="container"></body>
```

### Button
```
<button class="btn">Button</button>
<button class="btn btn--transparent">Button</button>
```

### Input
```
<div class="form-group">
    <label>Label</label>
    <input />
</div>
```

### Select
```
<div class="form-group">
    <label>Label</label>
    <select>
      <option>Option One</option>
      <option>Option Two</option>
    </select>
</div>
```

### Link
```
<a class="link" href="#">Link</a>
```

This repo is mantained by [Leonardo Tuna](https://www.leotuna.com).