const estudosTask = document.getElementById('estudos');
const crossfitTask = document.getElementById('crossfit');
const intervaloTask = document.getElementById('intervalo');
const petsTask = document.getElementById('pets');
const namoradaTask = document.getElementById('namorada');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Tasks click 
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'estudos':
            activeTask(estudosTask, taskColor);
            icon = '<i class="fas fa-book"></i>';
            break
        case 'crossfit':
            activeTask(crossfitTask, taskColor);
            icon = '<i class="fas fa-dumbbell"></i>';
            break
        case 'intervalo':
            activeTask(intervaloTask, taskColor);
            icon = '<i class="fas fa-clock"></i>';
            break
        case 'pets':
            activeTask(petsTask, taskColor);
            icon = '<i class="fas fa-cat"></i>';
            break
        case 'namorada':
            activeTask(namoradaTask, taskColor);
            icon = '<i class="fas fa-heart"></i>';
            break
    }

};

// Set colors for schedule
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active task 
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}
