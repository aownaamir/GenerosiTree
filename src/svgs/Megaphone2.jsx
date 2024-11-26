function Megaphone2({ width = "50px", height = "50px", fill, className }) {
  return (
    <svg
      // width={width}
      // height={height}
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 31V38C12 39.1046 12.8954 40 14 40C15.1046 40 16 39.1046 16 38V31H12Z"
        // fill={fill}
        className={className}
      />
      <path
        d="M7 26V20C7 18.3431 8.34315 17 10 17H16V29H11.5H10C8.34315 29 7 27.6569 7 26Z"
        // fill={fill}
        className={className}
      />
      <path
        d="M34 23V22C34 20.3431 32.6569 19 31 19V26C32.6569 26 34 24.6569 34 23Z"
        // fill={fill}
        className={className}
      />
      <path
        d="M18 30V15L27.4631 8.97803C28.1288 8.55439 29 9.0326 29 9.82169V35.1783C29 35.9674 28.1288 36.4456 27.4631 36.022L18 30Z"
        // fill={fill}
        className={className}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.832 17.4453C41.1384 17.9048 41.0142 18.5257 40.5547 18.832L37.5547 20.832C37.0952 21.1384 36.4743 21.0142 36.1679 20.5547C35.8616 20.0952 35.9858 19.4743 36.4453 19.1679L39.4453 17.1679C39.9048 16.8616 40.5257 16.9858 40.832 17.4453ZM36 24C36 23.4477 36.4477 23 37 23H41C41.5523 23 42 23.4477 42 24C42 24.5523 41.5523 25 41 25H37C36.4477 25 36 24.5523 36 24ZM36.1679 27.4453C36.4743 26.9858 37.0952 26.8616 37.5547 27.1679L40.5547 29.1679C41.0142 29.4743 41.1384 30.0952 40.832 30.5547C40.5257 31.0142 39.9048 31.1384 39.4453 30.832L36.4453 28.832C35.9858 28.5257 35.8616 27.9048 36.1679 27.4453Z"
        // fill={fill}
        className={className}
      />
    </svg>
  );
}

export default Megaphone2;
