import React from 'react';

const Description = () => {
    return (
        <div className="description">
            <div className="container">
                <div className="description__content">
                    <div className="description__left">
                        <h2 className="description__title">Madeira Cake</h2>
                        <p className="description__subtitle">Dessert | British</p>
                        <ul className="description__list">
                            <li className="description__item">- Butter 175g</li>
                            <li className="description__item">- Butter 175g</li>
                            <li className="description__item">- Butter 175g</li>
                            <li className="description__item">- Butter 175g</li>
                            <li className="description__item">- Butter 175g</li>
                        </ul>
                    </div>
                    <div className="description__right">
                        <img className="description__img"
                             src="https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg" alt=""/>
                    </div>
                </div>
                <div className="description__instruction">
                    <h3 className="description__instruction-title">Instruction</h3>
                    <p className="description__instruction-text">Pre-heat the oven to 180C/350F/Gas 4. Grease an 18cm/7in round cake tin, line the base with greaseproof paper and grease the paper. Cream the butter and sugar together in a bowl until pale and fluffy. Beat in the eggs, one at a time, beating the mixture well between each one and adding a tablespoon of the flour with the last egg to prevent the mixture curdling. Sift the flour and gently fold in, with enough milk to give a mixture that falls slowly from the spoon. Fold in the lemon zest. Spoon the mixture into the prepared tin and lightly level the top. Bake on the middle shelf of the oven for 30-40 minutes, or until golden-brown on top and a skewer inserted into the centre comes out clean. Remove from the oven and set aside to cool in the tin for 10 minutes, then turn it out on to a wire rack and leave to cool completely. To serve, decorate the cake with the candied peel.</p>

                </div>
                <button className="description__btn">Watch on YouTube</button>
            </div>
        </div>
    );
};

export default Description;