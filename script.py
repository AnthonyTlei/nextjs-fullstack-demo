import sys

def read_json_values(json_string):
    return json_string

if __name__ == "__main__":
    json_input = sys.argv[1]
    result = read_json_values(json_input)
    print(result)