# Create a Parameter Class

---

## 1. Setup the Environment

### Directory Structure
1. **Navigate to the parameters directory:**
   ```bash
   \sharc\parameters
   ```

2. **Create a new Python file for your parameter class:**  
   Use a descriptive naming convention such as `parameters_<model_name>.py`.  
   Example:
   ```bash
   parameters_custom_model.py
   ```

---

## 2. Define the Class Structure

The class will read parameters from a configuration file and organize them by different categories (e.g., general, IMT, antenna). For each category, you'll define a corresponding class (just like the example classes in the original file).

Here is a basic structure that you can follow:

### Example Parameter Class Structure
```python
import sys
import os
import configparser

# Import your parameter categories
from sharc.parameters.parameters_general import ParametersGeneral
from sharc.parameters.parameters_imt import ParametersImt
from sharc.parameters.parameters_antenna_imt import ParametersAntennaImt

# Additional parameter categories can be added here
# from sharc.parameters.parameters_hotspot import ParametersHotspot
# from sharc.parameters.parameters_indoor import ParametersIndoor

class Parameters:
    """
    A class that manages the reading and organizing of configuration parameters.
    """

    def __init__(self):
        self.file_name = None  # File name for the configuration file

        # Initialize parameter categories
        self.general = ParametersGeneral()
        self.imt = ParametersImt()
        self.antenna_imt = ParametersAntennaImt()
        
        # Add additional parameters as needed
        # self.hotspot = ParametersHotspot()
        # self.indoor = ParametersIndoor()
        
        # Each category will have its own parameter loading function
        # Initialize the other parameters here

    def set_file_name(self, file_name: str):
        """Sets the configuration file name for reading parameters."""
        self.file_name = file_name

    def read_params(self):
        """Reads the parameters from the configuration file."""
        if not os.path.isfile(self.file_name):
            err_msg = f"ERROR: Could not find the configuration file {self.file_name}"
            sys.stderr.write(err_msg)
            sys.exit(1)

        # Using configparser to read the configuration file
        config = configparser.ConfigParser()
        config.read(self.file_name)

        #######################################################################
        # Read general parameters
        #######################################################################
        self.general.load_parameters_from_file(self.file_name)

        #######################################################################
        # Read IMT parameters
        #######################################################################
        self.imt.load_parameters_from_file(self.file_name)

        #######################################################################
        # Read IMT Antenna parameters
        #######################################################################
        self.antenna_imt.load_parameters_from_file(self.file_name)

        # Additional categories can be loaded here
        # self.hotspot.load_parameters_from_file(self.file_name)
        # self.indoor.load_parameters_from_file(self.file_name)

        #######################################################################
        # More categories can be added here following the same pattern
        #######################################################################
        # self.fss_ss.load_parameters_from_file(self.file_name)
        # self.fss_es.load_parameters_from_file(self.file_name)

if __name__ == "__main__":
    from pprint import pprint
    # Create an instance of Parameters
    parameters = Parameters()

    # List all sections of the parameter class (excluding special methods and callable methods)
    param_sections = [a for a in dir(parameters) if not a.startswith('__') and not callable(getattr(parameters, a))]

    print("\n#### Dumping default parameters:")
    # Iterate over each parameter section and print its content
    for p in param_sections:
        print("\n")
        pprint(getattr(parameters, p))
```

---

## 3. Define Each Parameter Category Class

Each category (e.g., **General**, **IMT**, **Antenna**) should have its own class that loads the specific parameters for that category from the configuration file.

### Example of the `ParametersGeneral` Class

```python
import configparser

class ParametersGeneral:
    """
    Class for handling general parameters.
    """

    def __init__(self):
        self.param1 = None
        self.param2 = None
        # Define other general parameters here

    def load_parameters_from_file(self, file_name):
        """Load general parameters from the configuration file."""
        config = configparser.ConfigParser()
        config.read(file_name)
        
        if 'GENERAL' in config:
            self.param1 = config.getfloat('GENERAL', 'param1')
            self.param2 = config.getint('GENERAL', 'param2')
            # Load other general parameters here
```

This class reads the general parameters (like `param1` and `param2`) from the `GENERAL` section in the configuration file.

Repeat this structure for other categories like **IMT**, **Antenna**, **Hotspot**, and others. The only change is the section in the config file that the class will read.

---

## 4. Create the Configuration File

You need a configuration file that contains the parameter values. This file should follow the same structure as the classes.

### Example of the `config.ini` file:

```ini
[GENERAL]
param1 = 1000.0
param2 = 50

[IMT]
param1 = 100
param2 = 200

[ANTENNA_IMT]
param1 = 2.5
param2 = 3.0
```

This configuration file includes sections like `[GENERAL]`, `[IMT]`, and `[ANTENNA_IMT]`, where each section contains specific parameter values.

---

## 5. Test and Validate the Parameter Class

### Create a Test Script
To ensure that the parameter class is working as expected, create a test script to read and display the parameters.

```python
if __name__ == "__main__":
    parameters = Parameters()
    parameters.set_file_name("path_to_config/config.ini")
    parameters.read_params()

    # Print out all parameters
    from pprint import pprint
    param_sections = [a for a in dir(parameters) if not a.startswith('__') and not callable(getattr(parameters, a))]
    
    print("\n#### Dumping parameters:")
    for p in param_sections:
        print("\n")
        pprint(getattr(parameters, p))
```

This script will print all the parameters from the configuration file when executed.

---

## 6. Document and Share

### Documentation
- **Docstrings:**  
  Add clear docstrings for each class and method explaining their purpose and usage.
  
- **README Updates:**  
  Update the `README.md` file of the project to include instructions on how to use the new parameter class and configuration file.

---

## 7. Commit and Share Changes

### Version Control
- **Stage and Commit:**
  ```bash
  git add \sharc\parameters\parameters_custom_model.py
  git commit -m "Add custom parameter class for model"
  ```

- **Push Changes to the Repository:**
  ```bash
  git push origin <branch_name>
  ```

---