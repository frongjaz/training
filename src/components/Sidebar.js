import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './Sidebar.css';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarRef = React.createRef();
  } // =more=



  renderSection(section, index) {
    return (
      <div className="section" key={index}>
        <h2>{section.title}</h2>
        <ul className="menu-list">
          {section.pages.map((page, pageIndex) => (
            <li key={pageIndex}>
              <a href={page.href}>
                <FontAwesomeIcon icon={page.iconFontAwesome} />
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { navItems } = this.props;

    return (
      <div className="sidebar">
        {navItems.map((section, index) => this.renderSection(section, index))}
      </div>
    );
  }
}

export default Sidebar;
