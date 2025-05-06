
# Create a Simulation Campaign

---

## 1. Setup the Environment

### Step 1: Create the Campaign Folder
Choose a descriptive name for your campaign folder based on the simulation parameters.  
- **Example:** `imt_hibs_ras_2600_MHz`

---

### Step 2: Structure the Campaign Folder
Create the following subfolders to organize your files:

- **`input` Folder:**  
  Stores all input configuration files.  
  - **Path:** `campaigns/imt_hibs_ras_2600_MHz/input/`  
  - **Contents:** `.ini` files with simulation parameters.

- **`output` Folder:**  
  SHARC saves all simulation results here.  
  - **Path:** `campaigns/imt_hibs_ras_2600_MHz/output/`  
  - **Contents:** Simulation data, logs, and visualizations.

- **`scripts` Folder:**  
  Contains scripts for running simulations and analyzing results.  
  - **Path:** `campaigns/imt_hibs_ras_2600_MHz/scripts/`  
  - **Contents:** Python or MATLAB scripts.

---

## 2. Configuring Your Simulation  

### Step 3: Create a Parameter File
Define your simulation parameters in a `.ini` file.  
- **Example File:** `parameters_hibs_ras_2600_MHz_0km.ini`  
- **Location:** `campaigns/imt_hibs_ras_2600_MHz/input/`

---

### Step 4: Define Simulation Parameters in the `.ini` File
Customize your simulation settings in the `.ini` file. Key sections include:

```ini
###########################################################################
# Simulation Parameters
###########################################################################
# Frequency (in MHz)
frequency = 2600

# Satellite type and altitude
satellite_type = HIBS
altitude_km = 0

# Terrain model settings
terrain_resolution = high

###########################################################################
# Output Destination Folder (Relative to SHARC Directory)
###########################################################################
output_dir = campaigns/imt_hibs_ras_2600_MHz/output/

# Prefix for Output Files
output_dir_prefix = output_imt_hibs_ras_2600_MHz_0km
```

---

### Step 5: Create Multiple Simulation Configurations
To study different scenarios, create additional `.ini` files in the `input` folder.  
- **Examples:**  
  - `parameters_hibs_ras_2600_MHz_10km.ini`  
  - `parameters_hibs_ras_2600_MHz_20km.ini`  

---

## 3. Running Simulations  

### Step 6: Run the Simulations
In the `scripts` folder, create Python scripts to automate simulation execution.

#### Multi-threaded Simulation
Run multiple simulations in parallel for efficiency.  
- **Script:** `start_simulations_multi_thread.py`  

```python
import multiprocessing
from sharc import run_simulation

def run_config(file):
    run_simulation(file)

if __name__ == "__main__":
    config_files = ["input/parameters_hibs_ras_2600_MHz_0km.ini", 
                    "input/parameters_hibs_ras_2600_MHz_10km.ini"]
    with multiprocessing.Pool() as pool:
        pool.map(run_config, config_files)
```

#### Single-threaded Simulation
Run a single simulation for testing purposes.  
- **Script:** `start_simulations_single_thread.py`  

```python
from sharc import run_simulation

run_simulation("input/parameters_hibs_ras_2600_MHz_0km.ini")
```

---

## 4. Post-processing and Analyzing Results  

### Step 7: Post-process and Analyze Results
Create scripts to read the output data and generate visualizations.

#### Example Plot Script: `plot_results.py`  
This script reads simulation data and generates plots.

```python
import matplotlib.pyplot as plt
from sharc import plot_cdf

data_file = "output/output_imt_hibs_ras_2600_MHz_0km.csv"
plot_cdf(data_file, output_file="output/cdf_plot.png")
```

---
