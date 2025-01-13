import { useState, useEffect } from 'react';

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Définir un intervalle qui incrémente le compteur toutes les secondes
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Nettoyage de l'intervalle pour éviter des fuites de mémoire si le composant est démonté
        return () => clearInterval(interval);
    }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois lors du montage

    useEffect(() => {
        if (count >= 10) {
            window.location.reload();
        }
    }, [count]);

    return (
        <div>
            <p>Compteur: {count}</p>
        </div>
    );
};

export default CounterComponent;
