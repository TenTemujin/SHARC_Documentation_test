# Run the Simulator Using the Main Client Interface

---

The SHARC simulator can be executed via the main client interface script, `main_cli.py`. This guide walks you through the steps to run the SHARC simulator using this command-line interface (CLI).

## 1. Prerequisites

Before running the simulator, make sure you have:

- Python installed (preferably Python 3.8 or higher).
- All required dependencies installed. If not, use the following command to install them:
  ```bash
  pip install -r requirements.txt
  ```
- A valid configuration file (`parameters.ini` or `parameters.yaml`) containing the necessary simulation parameters.

## 2. Directory Structure

Ensure that your directory structure is set up as follows:

```
sharc/
    ├── controller/
    ├── gui/
    ├── model/
    ├── parameters/
    ├── support/
    └── main_cli.py       # Main client interface script
```

- Place the `parameters.ini` or `parameters.yaml` file inside the `input/` folder or specify it through the command line.

## 3. Command-Line Arguments

To run the simulator, use the following command:

```bash
python main_cli.py -p <param_file>
```

Where:
- `-p <param_file>`: Specifies the path to the configuration parameter file (e.g., `parameters.ini` or `parameters.yaml`). If not specified, it defaults to `input/parameters.ini`.

For additional help on usage, run:

```bash
python main_cli.py -h
```

This will show usage instructions:

```
usage: main_cli.py -p <param_file>
```

## 4. Running the Simulator

### Steps to Run

1. **Navigate to the SHARC directory:**
   Change to the directory where the SHARC project is located:
   ```bash
   cd /path/SHARC/sharc
   ```

2. **Run the simulator:**
   To run the simulator with a specific parameters file, use:
   ```bash
   python main_cli.py -p /path/to/parameters.ini
   ```

   If you don't specify a parameters file, it will default to `input/parameters.ini`:
   ```bash
   python main_cli.py
   ```

3. **View Logs:**
   The simulation will start, and logs will be displayed in the terminal. You can monitor these logs for progress and results. Logging is automatically set up via the `Logging.setup_logging()` function.

## 5. Parameters File

The configuration file (`parameters.ini` or `parameters.yaml`) should define the simulation parameters.

### Example `parameters.ini`

```ini
[GENERAL]
param1 = 1000.0
param2 = 50

[IMT]
param1 = 200
param2 = 300

[ANTENNA_IMT]
param1 = 2.5
param2 = 3.0
```

### Example `parameters.yaml`

```yaml
general:
  param1: 1000.0
  param2: 50

imt:
  param1: 200
  param2: 300

antenna_imt:
  param1: 2.5
  param2: 3.0
```

These parameters will be used by the simulator during execution, and you can modify them as needed.

## 6. Simulator Components

- **Model**: Handles the core logic and processes the simulation data.
- **ViewCli**: Provides the command-line interface to show progress and results.
- **Controller**: Manages the interaction between the Model and View.
- **Logging**: Captures logs for tracking the simulation's progress and any issues.

## 7. Example Output

Upon running the simulator, you will see output in the console like this:

```
Welcome to SHARC!

Initializing SHARC model...
Loading parameters from /path/to/parameters.ini...
Simulation is running...
[INFO] Model initialized with parameters.
[INFO] Controller and View set up.
[INFO] Running simulation for IMT...
Simulation complete.
```

Logs will provide insights into the simulation's progress and any potential errors.

## 8. Handling Errors

If there is an issue with the parameters file or setup, the simulator will print an error message, such as:

```
ERROR: Could not find the configuration file /path/to/parameters.ini
```

Ensure that the file path is correct and that the configuration file is formatted properly.

---