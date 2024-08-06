function LoadingIcon(props)
{
    return(
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className={props.cl} style={{"shapeRendering": "auto", "display": "block", "background": "rgba(255, 255, 255, 0)"}}><g><path style={{"transform":"scale(0.8300000000000001)","transformOrigin":
            "50px 50px"}} strokeLinecap="round" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" strokeDasharray="218.10058898925783 38.48833923339842" strokeWidth="11" stroke="#d98e04" fill="none">
  <animate values="0;256.58892822265625" keyTimes="0;1" dur="0.9090909090909091s" repeatCount="indefinite" attributeName="stroke-dashoffset"></animate>
</path></g></svg>
    )
}

export default LoadingIcon