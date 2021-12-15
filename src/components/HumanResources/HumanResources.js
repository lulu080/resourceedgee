import "./HumanResources.css"

const HumanResources = () => {
    return (
        <div className="Hr">
            <section className="hrheader">
                <p id ='bigp'>Human Resources</p>
                <p id ='littlep'>
                Onboard new employees, manage the employee lifecycle and measure employee performance.
                </p>
            </section>
           <img src="/images/frame.png" className="hraside" alt=""/>
            <section className="hrbody">
                 <div id="container">
                    <nav>
                        <div id="content">
                        <img src="/images/notification.png" id="no1" alt=""/>
                        <img src="/images/right-content.png" id = "no2" alt=""/>
                        <aside className="leftcontent">
                            <p>Employee Directory</p>
                            <img src="/images/Group.png" id="group" alt=""/>
                            <img src="/images/menu.png" id="menu" alt=""/>
                        </aside>
                        </div>
                    </nav>
                    <aside className="employee">
                                <div id="divcontent1">

                                </div>
                                  <div id="divcontent2">
                                      <p>Employees</p>
                                  </div>
                        </aside>
                        <div id="search">
                            <img src="/images/Search.png"/>
                        </div>
                   <img src="/images/picture1.png" id="picture1" alt=""/>
                 </div>
                 <img src = "/images/personcard.png" id="personcard" alt=""/>
            </section>
        </div>
    )
}

export default HumanResources

