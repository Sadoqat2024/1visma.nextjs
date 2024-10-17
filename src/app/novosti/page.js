import React from 'react';
import styles from "./FourthList.module.css"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


const FourthList =() =>{
    return(
        <div className={styles.fourthlist}>
            <div className={styles.nav_list}>
                <h1>НОВОСТИ</h1>
                <p>Все новости  <IoArrowForwardCircleOutline /> </p>
            </div>
            <div className={styles.cardlist}>
               <Card className={styles.fourth_cards}>
                 <CardImg className={styles.cardimage1} top width="100%" src="/card1.png" alt="Card image cap" />
                    <CardBody>
                    <CardText>
                          <small className="text-muted">20/12/22</small>
                        </CardText>
                        <CardTitle>Card Title</CardTitle>
                           <CardText>
                            This is a wider card with supporting text below as a 
                             lead-in to additional content. This 
                              is a little bit longer.
                              </CardText>
                    </CardBody>
                </Card>

               <Card className={styles.fourth_cards}>
                 <CardImg className={styles.cardimage2} top width="100%" src="/card2.png" alt="Card image cap" />
                    <CardBody>
                    <CardText>
                          <small className="text-muted">01/23/23</small>
                        </CardText>
                        <CardTitle>Card Title</CardTitle>
                           <CardText>
                            This is a wider card with supporting text below as a 
                             lead-in to additional content. This 
                              is a little bit longer.
                              </CardText>

                    </CardBody>
                </Card>

               <Card className={styles.fourth_cards}>
                 <CardImg className={styles.cardimage3} top width="100%" src="/card3.png" alt="Card image cap" />
                    <CardBody>
                    <CardText>
                          <small className="text-muted">02/12/23</small>
                        </CardText>
                        <CardTitle>Card Title</CardTitle>
                           <CardText>
                            This is a wider card with supporting text below as a 
                             lead-in to additional content. This 
                              is a little bit longer.
                              </CardText>
                        
                    </CardBody>
                </Card>
                
               <Card className={styles.fourth_cards}>
                 <CardImg className={styles.cardimage4} top width="100%" src="/card4.png" alt="Card image cap" />
                    <CardBody>
                    <CardText>
                          <small className="text-muted">02/28/23</small>
                        </CardText>
                        <CardTitle>Card Title</CardTitle>
                           <CardText>
                            This is a wider card with supporting text below as a 
                             lead-in to additional content. This 
                              is a little bit longer.
                              </CardText>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}
export default FourthList;