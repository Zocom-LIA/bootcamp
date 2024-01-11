import './styles.scss';
import { Button, ButtonType} from "@zocom/button";
import { StyleTypes } from "@zocom/types";
//{menuData.wontons[1].name}

export const KitchenOngoingCard = () => {

    const handleClick = () => {
        console.log("clicked!");
    };

    return (
        <>
            <section className='kitchen-ongoing-card'>
                <h1 className='kitchen-ongoing-card__title'>#4kjwsdf234k</h1>
                <section className='kitchen-ongoing-card__info'>
                    <section className='kitchen-ongoing-card__items'>
                        <p>Karlstad</p>
                        <p className='kitchen-ongoing-card__dots'></p>
                        <p>3 st</p>
                        <p>27 sek</p>
                    </section>
                    <section className='kitchen-ongoing-card__total'>
                        <hr className='kitchen-ongoing-card__line' />
                        <p>129 sek</p>
                    </section>
                </section>

                <section className='kitchen-ongoing-card__time'>
                    <p>Väntat i 2:33</p>
                </section>

                <Button type={ButtonType.STRETCH} style={StyleTypes.DEFAULT} onClick={handleClick}>
                    redo att serveras
                </Button>
            </section>
        </>
    );
};