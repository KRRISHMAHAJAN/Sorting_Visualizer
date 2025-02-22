function Heap() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    // Build Max Heap
    for (let i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
        heapify(array_size, i);
    }

    // Heap Sort
    for (let i = array_size - 1; i > 0; i--) {
        // Swap the root (max) with the last element
        let temp = div_sizes[0];
        div_sizes[0] = div_sizes[i];
        div_sizes[i] = temp;

        div_update(divs[0], div_sizes[0], "red"); // Highlight swap
        div_update(divs[i], div_sizes[i], "red"); // Highlight swap
        div_update(divs[i], div_sizes[i], "green"); // Mark as sorted

        // Heapify root element to maintain max heap
        heapify(i, 0);
    }
    div_update(divs[0], div_sizes[0], "green"); // Mark final sorted element

    enable_buttons();
}

function heapify(n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // Left child is larger
    if (left < n && div_sizes[left] > div_sizes[largest]) {
        largest = left;
    }

    // Right child is larger
    if (right < n && div_sizes[right] > div_sizes[largest]) {
        largest = right;
    }

    // If largest is not the root
    if (largest !== i) {
        let temp = div_sizes[i];
        div_sizes[i] = div_sizes[largest];
        div_sizes[largest] = temp;

        div_update(divs[i], div_sizes[i], "yellow"); // Highlight heapify process
        div_update(divs[largest], div_sizes[largest], "yellow");

        heapify(n, largest);
    }
}
