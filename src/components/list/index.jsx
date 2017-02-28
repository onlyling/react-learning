import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class List extends Component {

  static contextTypes = {
    data: PropTypes.array
  }

  render() {

    let lists = this.props.data.map((obj, index) => {

      return (
        <article className="m-excerpt fn-clear" key={index}>

          <div className="focus">
            <Link to="/list">
              <img src={obj.imgUrl} alt={obj.title} />
            </Link>
          </div>

          <header className="header">
            <h3 className="fn-fwn">
              <Link to={`/article?id=${obj.id}`}>{obj.title}</Link>
            </h3>
          </header>

          <p className="fn-mb10">3424</p>

          <p className="note fn-mb10">{obj.note}</p>

        </article>
      )

    })

    return (
      <div>
        {lists}
      </div>
    )

  }

}
