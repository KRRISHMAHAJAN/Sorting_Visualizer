function Quick() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N²)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)"; // Recursive stack space

    c_delay = 0;

    quickSortHelper(0, array_size - 1);

    // Mark all elements as sorted (green) after sorting is completed
    for (let i = 0; i < array_size; i++) {
        div_update(divs[i], div_sizes[i], "green");
    }

    enable_buttons();
}

function quickSortHelper(low, high) {
    if (low < high) {
        let pIndex = partitionHelper(low, high);

        quickSortHelper(low, pIndex - 1);
        quickSortHelper(pIndex + 1, high);
    }
}

function partitionHelper(low, high) {
    let pivot = div_sizes[low];
    let i = low;
    let j = high;

    div_update(divs[low], div_sizes[low], "yellow"); // Highlight pivot

    while (i < j) {
        while (div_sizes[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (div_sizes[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            [div_sizes[i], div_sizes[j]] = [div_sizes[j], div_sizes[i]];
            div_update(divs[i], div_sizes[i], "red"); // Highlight swap
            div_update(divs[j], div_sizes[j], "red"); // Highlight swap
        }
    }
    // Swap pivot with correct position
    [div_sizes[low], div_sizes[j]] = [div_sizes[j], div_sizes[low]];
    div_update(divs[low], div_sizes[low], "blue"); // Pivot placed
    div_update(divs[j], div_sizes[j], "green"); // Sorted element

    return j;
}
