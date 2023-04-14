import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareNfi, faArrowsSpin, faMagnifyingGlassDollar, faMuseum, faX, faUsersCog, faUmbrella, faTrainTram, faClone, faChainSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const RandomIcons = () => {
  const [icon, setIcon] = useState(null)
  const [loading, setLoading] = useState(false)

  const getRandomValueFromArray = () => {
    const radnomIcon = [faSquareNfi, faArrowsSpin, faMagnifyingGlassDollar, faMuseum, faX, faUsersCog, faUmbrella, faTrainTram, faClone, faChainSlash]

    const randomIndex = Math.floor(Math.random() * radnomIcon.length);

    setLoading(true)
    setTimeout(() => {
      setIcon(radnomIcon[randomIndex])
      setLoading(false)
    }, 2000)

    return radnomIcon[randomIndex];
  }

  return (
    <div className='random-icon__container'>
      <div className='random-icon__icon'>
        <div className='loading'>{loading && '...loading'}</div>
        {!loading && icon && <FontAwesomeIcon icon={icon} />}
      </div>

      <button disabled={loading} onClick={getRandomValueFromArray} className={loading ? 'random-icon__btn-disabled' : 'random-icon__btn'}>click</button>
    </div>
  )
}

export default RandomIcons