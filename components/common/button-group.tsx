import "react-multi-carousel/lib/styles.css";
import styles from '../../styles/common/button-group.module.css'


 export const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
     const CustomRightArrow = ({ onClick, ...rest }: any) => {
         const {
             onMove,
         } = rest;
         return <button className={styles.customRightArrow} onClick={() => onClick()} />;
     };

     const CustomLeftArrow = ({ onClick, ...rest }: any) => {
         const {
             onMove,
         } = rest;
         return <button className={styles.customLeftArrow} onClick={() => onClick()} />;
     };
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <CustomLeftArrow onClick={() => previous()} />
            <CustomRightArrow onClick={() => next()} />
        </div>
    );
};
