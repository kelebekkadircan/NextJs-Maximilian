import Link from 'next/link'
import React from 'react'
import styles from './EventItem.module.css'
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Image from 'next/image';



function EventItem(props) {

    const { title, image, date, location, id } = props;

    const humanReadebleDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: "numeric",
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;


    return (
        <>


            <li className={styles.item}>
                <Image src={'/' + image} alt={title} width={250} height={160} />
                {/* <img src={'/' + image} alt={title} /> */}
                <div className={styles.content} >
                    <div className={styles.summary} >
                        <h2>{title}</h2>
                        <div className={styles.date} >
                            <DateIcon />
                            <time>{humanReadebleDate}</time>
                        </div>
                        <div className={styles.address} >
                            <AddressIcon />
                            <address>{formattedAddress}</address>
                        </div>
                    </div>
                    <div className={styles.actions} >
                        {/* <Link href={exploreLink}>Explore Event</Link> */}
                        <Button link={exploreLink} >
                            <span>Explore Event</span>
                            <span className={styles.icon} ><ArrowRightIcon /></span>

                        </Button>
                    </div>
                </div>

            </li>
        </>
    )
}

export default EventItem