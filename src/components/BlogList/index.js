import './index.css'

const BlogList = props => {
  const {eachBlogItem} = props
  const {title, description, publishedDate} = eachBlogItem

  return (
    <div>
      <div className="blog-list-container">
        <div className="item-left">
          <h1 className="blog-item-name">{title}</h1>
          <p className="blog-item-desc">{description}</p>
        </div>
        <div className="item-right">
          <p className="blog-item-date">{publishedDate}</p>
        </div>
      </div>
      <hr className="hr-line" />
    </div>
  )
}

export default BlogList
