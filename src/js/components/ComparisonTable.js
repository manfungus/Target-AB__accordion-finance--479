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

    data.map((item, index) => {
      const li = document.createElement('li');
      li.textContent = item.model;

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

    modelTitle.addEventListener('click', () => {
      console.log('test')
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

  


  // comparisonTable.innerHTML = `<div><div>${model0.model}</div> <button class="test">test</button></div>`;

  // console.log(data, 'TEST HERE')

  // comparisonTable.querySelector('.test').addEventListener('click', () => {
  //   console.log('test here 098')
  //   model0 = data[1]

  //   console.log(model0, 'test here 765')
  // })  

  return comparisonTable;
};

export default ComparisonTable;