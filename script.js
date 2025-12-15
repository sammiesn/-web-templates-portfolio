
const counter = document.querySelector('.counter');
let count = 0;
const target = parseInt(counter.getAttribute('data-target'));

const updateCounter = () => {
    if (count < target) {
        count += 10;
        counter.textContent = count;
        requestAnimationFrame(updateCounter);
    }
};
updateCounter();


const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.style.display = 'block';
document.getElementById('closeModal').onclick = () => modal.style.display = 'none';


const images = [
  "https://images.unsplash.com/photo-1503264116251-35a269479413?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=200&fit=crop"
];
let index = 0;
document.getElementById('next').onclick = () => {
    index = (index + 1) % images.length;
    document.getElementById('sliderImage').src = images[index];
};

document.getElementById('prev').onclick = () => {
    index = (index - 1 + images.length) % images.length;
    document.getElementById('sliderImage').src = images[index];
};