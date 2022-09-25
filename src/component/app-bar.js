class AppBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <style>
      nav {
        display: block;
        width: 100%;
        background-color: #4D3E3E;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
      }
  
      .navbar-brand > h3 {
        margin-left: 50px;
        color: #FFF3CD; 
      }
      </style>
  
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h3>Your Today's Meal</h3></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
          </button>
        </div>
      </nav>
      `;
    }
  }
   
  customElements.define('app-bar', AppBar);