import noUiSlider from '../vendor/nouislider'

const slider = document.getElementById('slider');
if (slider) {
  noUiSlider.create(slider, {
    start: [14000, 168000],
    connect: true,
    step: 1000,
    range: {
      'min': 0,
      'max': 250000
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    slider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      console.log(index);
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
