import './item.css'
import Button from './Button'
const Item = ({title,desc,img,textleft,textright,twobtn}) => {
  return (
    <div className="item" style={{
        backgroundImage:`url(${img})`
    }}>
        <div className="item_container">
            <div className="item_text">
                <p className="title">{title}</p>
                <div className="item_desc">
                    <p className="desc">{desc}</p>
                </div>
            </div>
            <div className="item_btn">
                <div className="item_btns">
                    <Button text={textleft} imp='primary'/>
                    {twobtn && <Button text={textright} imp='secondary'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item
