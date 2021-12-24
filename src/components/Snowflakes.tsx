
export default function Snowflakes() {
    let currentDate = new Date();
    let christmas = currentDate.getMonth() === 11; // Christmas styling in December
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