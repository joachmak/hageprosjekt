
export default function Snowflakes() {
    let currentDate = new Date();
    let christmas = currentDate.getMonth() === 11 || currentDate.getMonth() === 0; // Christmas styling in Dec, Jan
    return (
        <>
            {christmas &&
            <>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
            </>
            }
        </>
    )
}