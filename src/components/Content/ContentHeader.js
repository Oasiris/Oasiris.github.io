import React, { Component } from 'react';

export default class ContentHeader extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: Prop types
  // TODO: Default props

  render() {
    const desc = this.props.desc ? `// ${this.props.desc}` : '';

    return (
      <React.Fragment>
        <div className="content-header-row">
          <div className="content-header-block">
            {this.props.children}
          </div>
          <div className="content-header-desc">
            {desc}
          </div>
        </div>
        <div className="content-header-h-l" />
      </React.Fragment>
    );
  }
}