import "../../Styles/home/Header.css"

const Header = () => {
    return (
        <div className="contents">
          <div className="contents-tags">
            <div className="tag-1 tags">Innovation</div>
            <div className="tag-2 tags">Design</div>
            <div className="tag-3 tags">Technology</div>
          </div>
          <div className="contents-title">
            We Build Digital Experinces That <span className="contents-title-black">Matter</span>
          </div>
          <div className="contents-caption">
            M0RC is a modern digital studio focused on creating
            high-quality websites, web applications and brand experiences
            for forward-thinking businesses.
          </div>
          <div className="contents-btns">
            <button className="btns-left btns">Our Services</button>
            <button className="btns-right btns">View Portfolio</button>
          </div>
        </div>
    )
}

export default Header;