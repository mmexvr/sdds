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
              <span class='sdds-nav__link-icon'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' style='enable-background:new 0 0 256 256' xml:space='preserve'><path style='fill:currentColor' d='M236.67 107.34 128.96 36.52l-.03-.04-.01.01h-.01l-108.64 71 5.47 8.36 14.93-9.75v113.23h67v-60.66H150v60.66h67V106.37l14.18 9.33 5.5-8.36zm-29.67 102h-47v-60.67H97.67v60.66h-47V99.67h-.16l78.39-51.22L207 99.8v109.53z'/></svg>
              </span>
              Item 1 
            </a>
          </li> 
          
          <li class='sdds-nav__item sdds-nav__item--active'>
            <a class='sdds-nav__link ' href='#'>Item 2</a>
          </li>
          
          <li class='sdds-nav__item sdds-nav__dropdown sdds-nav__dropdown--opened'>  
              <a class='sdds-nav__link' href='#'> 
                  Item 3 
                  <span class='sdds-nav_dropdown-icon'>
                      <svg width='12' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='m1 1 5 5 5-5' stroke='currentColor' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/></svg>                  
                  </span>
              </a>   
              <ul class='sdds-nav__dropdown-menu'>
                <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-link' href='#'>Sub item 3 long label...</a></li>
                <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-link sdds-nav__dropdown-link--active' href='#'>Sub item 3</a></li>
                <li class='sdds-nav__dropdown-item'><a class='sdds-nav__dropdown-link' href='#'>Sub item 3 long label...</a></li>
              </ul>
          </li>                    
        </ul>        
    </div


    <div class='sdds-nav__toolbar-menu'>
       <a href='#' class='sdds-nav__app-logo'></a>
    </div>  
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
