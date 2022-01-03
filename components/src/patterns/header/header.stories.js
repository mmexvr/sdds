import readme from './readme.md';

export default {
  title: 'Patterns/Header',
  argTypes: {
    siteName: {
      type: 'string',
      defaultValue: 'Application',
    },
  },
  parameters: {
    notes: readme,
  },
};

const BasicTemplate = ({ siteName }) => `
  <sdds-theme></sdds-theme>

  <nav class='sdds-nav'>
    <div class='sdds-nav__inline-menu'>
        <div class='sdds-nav__app-name'>${siteName}</div>
    </div>
    <div class='sdds-nav__toolbar-menu'>
       <a href='#' class='sdds-nav__app-logo'></a>
    </div>   
  </nav>`;

export const Basic = BasicTemplate.bind({});
Basic.args = {
  siteName: 'My Application',
  openMenuMobile: false,
};

const Template = ({
  siteName,
  openMenuMobile = false,
  navMenu = '',
  toolbarMenuMobile = '',
  toolbarMenu = '',
}) => {
  const overlayExpanded =
    openMenuMobile || toolbarMenu.trim('').length > 0 ? 'expanded' : '';
  const expanded = openMenuMobile ? 'expanded' : '';

  return `
  <sdds-theme></sdds-theme>

  <nav class='sdds-nav'>        
      <div class='sdds-nav__inline-menu'>
      <!--
        <button id='menu-mobile' class='sdds-navbar-icon-button sdds-navbar-side-menu-drawer expanded '>
          <span class='sdds-icon-drawer'></span>
        </button>
        -->
        <div class='sdds-nav__app-name'>${siteName}</div>
        
        <ul class='sdds-nav__inline-menu'>
        
          <li class='sdds-nav__item'>
            <a class='sdds-nav__link' href='#'> 
              <span class='sdds-nav__link-icon sdds-nav__link-icon--text'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' style='enable-background:new 0 0 256 256' xml:space='preserve'><path style='fill:currentColor' d='M236.67 107.34 128.96 36.52l-.03-.04-.01.01h-.01l-108.64 71 5.47 8.36 14.93-9.75v113.23h67v-60.66H150v60.66h67V106.37l14.18 9.33 5.5-8.36zm-29.67 102h-47v-60.67H97.67v60.66h-47V99.67h-.16l78.39-51.22L207 99.8v109.53z'/></svg>
              </span>
              Item 1 
            </a>
          </li> 
          
          <li class='sdds-nav__item sdds-nav__item--active'>
            <a class='sdds-nav__link ' href='#'>Item 2</a>
          </li>
          
          <li class='sdds-nav__item sdds-nav__dropdown sdds-nav__dropdown--opened'>  
              <button class='sdds-nav__link'> 
                  Item 3 
                  <span class='sdds-nav_dropdown-icon'>
                      <svg viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path fill-rule='evenodd' clip-rule='evenodd' fill='currentColor' d='M1.13668 0.891564C1.33194 0.696302 1.64853 0.696302 1.84379 0.891564L6.78786 5.83563C6.90501 5.95278 7.09496 5.95278 7.21212 5.83563L12.1562 0.891564C12.3515 0.696302 12.668 0.696303 12.8633 0.891565C13.0586 1.08683 13.0586 1.40341 12.8633 1.59867L7.91923 6.54273C7.41155 7.05041 6.58843 7.05041 6.08075 6.54273L1.13668 1.59867C0.941419 1.40341 0.941419 1.08683 1.13668 0.891564Z'/>
                      </svg>                                       
                  </span>
              </button>   
              <ul class='sdds-nav__dropdown-menu'>
                <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-link' href='#'>Sub item 3 long label...</a></li>
                <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-link sdds-nav__dropdown-link--active' href='#'>Sub item 3</a></li>
                <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-link' href='#'>Sub item 3 long label...</a></li>
              </ul>
          </li>                    
        </ul>        
    </div>


    <ul class='sdds-nav__toolbar-menu'>    
      <li class='sdds-nav__item'>
            <a class='sdds-nav__link' href='#'> 
            <span class='sdds-nav__link-icon'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' style='enable-background:new 0 0 256 256' xml:space='preserve'><path style='fill:currentColor' d='M236.67 107.34 128.96 36.52l-.03-.04-.01.01h-.01l-108.64 71 5.47 8.36 14.93-9.75v113.23h67v-60.66H150v60.66h67V106.37l14.18 9.33 5.5-8.36zm-29.67 102h-47v-60.67H97.67v60.66h-47V99.67h-.16l78.39-51.22L207 99.8v109.53z'/></svg>
            </span>           
        </a>
      </li> 
      
      <li class='sdds-nav__item'>
          <a href='#' class='sdds-nav_avatar'>
            <img src='https://www.svgrepo.com/show/170303/avatar.svg' alt='profile photo'/>  
        </a>   
      </li>
      
      <li class='sdds-nav__item sdds-nav__app-launcher sdds-nav__app-launcher--opened'>
          <button class='sdds-nav__app-launcher-btn' href='#'>
            <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M1.33333 2.66667C2.06971 2.66667 2.66667 2.06971 2.66667 1.33333C2.66667 0.596954 2.06971 0 1.33333 0C0.596954 0 0 0.596954 0 1.33333C0 2.06971 0.596954 2.66667 1.33333 2.66667ZM9.33307 1.33333C9.33307 2.06971 8.73612 2.66667 7.99974 2.66667C7.26336 2.66667 6.66641 2.06971 6.66641 1.33333C6.66641 0.596954 7.26336 0 7.99974 0C8.73612 0 9.33307 0.596954 9.33307 1.33333ZM16.0003 1.33333C16.0003 2.06971 15.4033 2.66667 14.6669 2.66667C13.9305 2.66667 13.3336 2.06971 13.3336 1.33333C13.3336 0.596954 13.9305 0 14.6669 0C15.4033 0 16.0003 0.596954 16.0003 1.33333ZM16.0003 8C16.0003 8.73638 15.4033 9.33333 14.6669 9.33333C13.9305 9.33333 13.3336 8.73638 13.3336 8C13.3336 7.26362 13.9305 6.66667 14.6669 6.66667C15.4033 6.66667 16.0003 7.26362 16.0003 8ZM14.6669 16C15.4033 16 16.0003 15.403 16.0003 14.6667C16.0003 13.9303 15.4033 13.3333 14.6669 13.3333C13.9305 13.3333 13.3336 13.9303 13.3336 14.6667C13.3336 15.403 13.9305 16 14.6669 16ZM7.99974 9.33333C8.73612 9.33333 9.33307 8.73638 9.33307 8C9.33307 7.26362 8.73612 6.66667 7.99974 6.66667C7.26336 6.66667 6.66641 7.26362 6.66641 8C6.66641 8.73638 7.26336 9.33333 7.99974 9.33333ZM9.33307 14.6667C9.33307 15.403 8.73612 16 7.99974 16C7.26336 16 6.66641 15.403 6.66641 14.6667C6.66641 13.9303 7.26336 13.3333 7.99974 13.3333C8.73612 13.3333 9.33307 13.9303 9.33307 14.6667ZM2.66667 8C2.66667 8.73638 2.06971 9.33333 1.33333 9.33333C0.596954 9.33333 0 8.73638 0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667C2.06971 6.66667 2.66667 7.26362 2.66667 8ZM1.33333 16C2.06971 16 2.66667 15.403 2.66667 14.6667C2.66667 13.9303 2.06971 13.3333 1.33333 13.3333C0.596954 13.3333 0 13.9303 0 14.6667C0 15.403 0.596954 16 1.33333 16Z' fill='currentColor' fill-opacity='1'/>
            </svg>
        </button>    
        <ul class='sdds-nav__app-launcher-menu'>
          <li class='sdds-nav__app-launcher-item sdds-nav__app-launcher-item--category'>
             <p class='sdds-nav__app-launcher-category-title'>Category name</p>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 1</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 2</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 3</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 4</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 5</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 6</a>
          </li>
          <li class='sdds-nav__app-launcher-item sdds-nav__app-launcher-item--category'>
             <p class='sdds-nav__app-launcher-category-title'>Category 2</p>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 1</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 2</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 3</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 4</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 5</a>
          </li>
          <li class='sdds-nav__app-launcher-item'>
             <a href='' class='sdds-nav__app-launcher-link'>Application 6</a>
          </li>
        </ul>
      </li>  
      
      <li class='sdds-nav__item sdds-nav__app-logo'>
        <a href='#'></a>    
      </li>
    </ul>  
  </nav>
  `;
};

const navMenuHTML = `
<ul class='sdds-navbar-menu-list'>
  <li class='sdds-navbar-menu-item active'>
    <a class='sdds-navbar-menu-item-link' href='#'> 
      <span class='sdds-navbar-icon-button'><svg width='20' height='20' viewBox='0 0 20 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><rect y='0.334473' width='20' height='20'/> </svg></span>
      Item 1 
    </a>
  </li>
  <li class='sdds-navbar-menu-item'>
    <a class='sdds-navbar-menu-item-link' href='#'> Item 2 </a>
  </li>
  <li class='sdds-navbar-menu-item-dropdown opened'>
    <a class='sdds-navbar-menu-item-link' href='#'> 
      Item 3 
      <span class='sdds-icon-arrow'></span>
    </a>
    <ul class='sdds-navbar-menu__dropdown-menu'>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Sub item 3 long label...</a></li>
      <li class='sdds-navbar-menu__dropdown-item active'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Sub item 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Sub item 3 long label...</a></li>
    </ul>
  </li>
  <li class='sdds-navbar-menu-item'>
    <a class='sdds-navbar-menu-item-link' href='#'> Item 4 </a>
  </li>
</ul>
`;

const toolbarMenuMobileHTML = `
<div class='sdds-navbar-menu-toolbar-mobile'>
  <ul class='sdds-navbar-menu-list'>
    <li class='sdds-navbar-menu-item'>
      <a class='sdds-navbar-menu-item-link' href='#'>Toolbar link</a>
    </li>
    <li class='sdds-navbar-menu-item-dropdown'>
      <a class='sdds-navbar-menu-item-link' href='#'>EN <span class='sdds-icon-arrow'></span></a>
      <ul class='sdds-navbar-menu__dropdown-menu'>
      <li class='sdds-navbar-menu__dropdown-item sdds-navbar-menu-item-description'>Select language</li>
        <li class='sdds-navbar-menu__dropdown-item active'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>English</a></li>
        <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Finnish</a></li>
        <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>France</a></li>
        <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Swedish</a></li>
      </ul>
    </li>
  </ul>
</div>
`;

const toolbarMenuHTML = `
<div class='sdds-navbar-menu-toolbar'>
  <div class='sdds-navbar-menu-item-dropdown opened'>
    <a class='sdds-navbar-menu-item-link' href='#'><span class='sdds-icon-applauncher'></span></a>
    <ul class='sdds-navbar-menu__dropdown-menu'>
      <li class='sdds-navbar-menu__dropdown-item sdds-navbar-menu-item-description'>Category name</li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 1</a></li>
      <li class='sdds-navbar-menu__dropdown-item active'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 2</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
      <li class='sdds-navbar-menu__dropdown-item'><a class='sdds-navbar-menu__dropdown-item-link' href='#'>Application name 3</a></li>
    </ul>
  </div>
</div>
`;

export const NavMenu = Template.bind({});
NavMenu.args = {
  siteName: 'My Application',
  openMenuMobile: false,
  navMenu: navMenuHTML,
};

export const toolbarMenu = Template.bind({});
toolbarMenu.args = {
  siteName: 'My Application',
  openMenuMobile: false,
  toolbarMenuMobile: toolbarMenuMobileHTML,
  toolbarMenu: toolbarMenuHTML,
};

export const AllMenu = Template.bind({});
AllMenu.args = {
  siteName: 'My Application',
  openMenuMobile: false,
  navMenu: navMenuHTML,
  toolbarMenuMobile: toolbarMenuMobileHTML,
  toolbarMenu: toolbarMenuHTML,
};
