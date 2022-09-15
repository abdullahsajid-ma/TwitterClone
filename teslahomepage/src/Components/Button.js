import './button.css'
const Button = ({text,imp}) => {
  return (
    <div className={`button ${imp === 'secondary' ? 'btnwhite' : ''}`}>
        <a href="#">{text}</a>
    </div>
  )
}

export default Button
