import data from '../../data/comparisonData.json';
import ComparisonTableCard from './ComparisonTableCard';

let ComparisonTable = () => {
  let model0 = data[0];
  let model1 = data[1];
  let model2 = data[2];

  const comparisonTable = document.createElement('div');
  comparisonTable.classList.add('opti-comparison-table')

  let DropDown = (index) => {

    let dropDown = document.createElement('ul');
    dropDown.classList.add('opti-comparisonCard__header-dropdown-selection')

    data.map((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#">${item.model}</a>`;

      li.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()

        let target = e.target.closest('.opti-comparisonCard__wapper');

        target.querySelector('.opti-comparisonCard').remove();
        target.querySelector('.opti-comparisonCard__header-title').innerHTML = item.model
        target.append(ComparisonTableCard(item))
        
        target.querySelector('.opti-comparisonCard__header-dropdown-selection').classList.remove('opti-comparisonCard__header-dropdown-selection--open')
        target.querySelector('.opti-comparisonCard__header-title').classList.remove('opti-comparisonCard__header-title--open')
      })

      dropDown.append(li)
    });

    return dropDown
  }

  const AddTitle = (item, index) => {

    const header = document.createElement('div');
    header.classList.add('opti-comparisonCard__header');

    let modelTitle = document.createElement('h3');
    modelTitle.classList.add('opti-comparisonCard__header-title')
    modelTitle.innerHTML = item.model;

    modelTitle.addEventListener('click', (e) => {
      e.target.classList.toggle('opti-comparisonCard__header-title--open')
      e.target.nextElementSibling.classList.toggle('opti-comparisonCard__header-dropdown-selection--open')
      
    })

    header.append(modelTitle);
    header.append(DropDown(index));

    return header
  }

  data.map((item, index) => {
    if (index < 3) {
      const modelWrapper = document.createElement('div');
      modelWrapper.classList.add(`opti-comparisonCard__wapper`);

      modelWrapper.append(AddTitle(item))
      modelWrapper.append(ComparisonTableCard(item))
      comparisonTable.append(modelWrapper)
      
    }
  })

  return comparisonTable;
};

export default ComparisonTable;