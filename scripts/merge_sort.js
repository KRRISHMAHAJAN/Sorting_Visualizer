function Merge() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)"; // Temporary array usage

    c_delay = 0;

    mergeSortHelper(0, array_size - 1);

    enable_buttons();
}

function mergeSortHelper(low, high) {
    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);
    div_update(divs[mid], div_sizes[mid], "yellow"); // Highlight midpoint

    mergeSortHelper(low, mid);  // Left half
    mergeSortHelper(mid + 1, high); // Right half
    mergeHelper(low, mid, high);  // Merge sorted halves
}

function mergeHelper(low, mid, high) {
    let temp = []; // Temporary array
    let left = low;  // Starting index of left half
    let right = mid + 1; // Starting index of right half

    // Storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
        if (div_sizes[left] <= div_sizes[right]) {
            temp.push(div_sizes[left]);
            div_update(divs[left], div_sizes[left], "red"); // Highlight merging
            left++;
        } else {
            temp.push(div_sizes[right]);
            div_update(divs[right], div_sizes[right], "red"); // Highlight merging
            right++;
        }
    }

    // If elements on the left half are still left
    while (left <= mid) {
        temp.push(div_sizes[left]);
        div_update(divs[left], div_sizes[left], "red");
        left++;
    }

    // If elements on the right half are still left
    while (right <= high) {
        temp.push(div_sizes[right]);
        div_update(divs[right], div_sizes[right], "red");
        right++;
    }

    // Transferring all elements from temp back to div_sizes
    for (let i = low; i <= high; i++) {
        div_sizes[i] = temp[i - low];
        div_update(divs[i], div_sizes[i], "green"); // Mark as sorted
    }
}
