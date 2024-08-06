function ButtonLoading(props)
{
    return(
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className={props.cl} style={{"shapeEendering": "auto","display": "block", "background": "transparent"}}><g><circle strokeLinecap="round" fill="none" strokeDasharray="54.97787143782138 54.97787143782138" stroke="#d98e04" strokeWidth="10" r="35" cy="50" cx="50">
  <animateTransform values="0 50 50;360 50 50" keyTimes="0;1" dur="1.1235955056179776s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
</circle></g></svg>
    )
}

export default ButtonLoading