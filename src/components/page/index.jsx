import React, { Component } from 'react'
// import { classSet } from 'react-addons'

export class PageHeader extends Component {

    constructor(prop) {
        super(prop)

        this.goBack = () => {
            history.back()
        }
    }

    render() {

        let _eClass = this.props.className

        let _class = [
            'm-bar',
            'm-bar-top',
            _eClass ? _eClass : ''
        ].filter((str) => !!str).join(' ')

        return (
            <header className={_class}>
                <span className="back" onClick={this.goBack}>&lt;</span>
                <h1 className="title">{this.props.title}</h1>
            </header>
        )
    }

}

export class PageBody extends Component {

    render() {
        return (
            <div className="m-content">
                {this.props.children}
            </div>
        )
    }

}
