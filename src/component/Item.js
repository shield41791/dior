import { Button, Header } from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({ item }) {
    // const {
    //     image_link,
    //     name,
    //     price,
    //     description,
    //     updated_at,
    //     category,
    //     product_type,
    //     product_link
    // } = item;

    return (
        <div>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={item.image_link} alt={item.name} />
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <strong className={styles.num_price}>${item.price}</strong>
                    <span className={styles.txt_info}>
                        {item.category ? `${item.category}` : ""}
                        {item.product_type}
                    </span>
                    <Button color="orange">Buy</Button>
                </div>
            </div>
            <Header as="h3">Description</Header>
            <p stype={{ paddingBottom: 20, fontSize: 18 }}>{item.description}</p>
        </div>
    );
}