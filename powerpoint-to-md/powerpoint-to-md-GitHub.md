# Convert a PowerPoint presentation to Markdown

This is a tutorial on how to convert a PowerPoint presentation to Markdown using Python.


### Python Setup on Mac

* [pyenv/pyenv: Simple Python version management](https://github.com/pyenv/pyenv)


#### Install Pyenv

Steps: <https://github.com/pyenv/pyenv#getting-pyenv>

```shell
# Install Pyenv via brew
brew update
brew install pyenv

# Add the following to ~/.zshrc
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc

# Restart the terminal
exec "$SHELL"
```


#### Use Pyenv

Current Python versions:  
[Download Python | Python.org](https://www.python.org/downloads/)

Install additional Python versions:  
For example, to download and install *Python 3.10.4*, run:

```shell
pyenv install 3.10.4
```

List of Python versions:  

```shell
pyenv install --list
```

Switch between Python versions:  

To select a Pyenv-installed Python as the version to use, run one of the following commands:

| Python Version Scope                         | Command                  |
| -------------------------------------------- | ------------------------ |
| Just for current shell session               | `pyenv shell <version>`  |
| Current directory (& subdirectories) Setting | `pyenv local <version>`  |
| Global Setting                               | `pyenv global <version>` |

Verify Python version:  

```shell
python --version
```


### PowerPoint to MD

[pptx2md](https://github.com/ssine/pptx2md) is a tool to convert PowerPoint to Markdown.

Install: `pip install pptx2md`

Usage: `pptx2md filename`

Options:  
* `-t [filename]` provide the title file
* `-o [filename]` path of the output file
* `-i [path]` directory of the extracted pictures
* `--image-width [width]` the maximum width of the pictures, in px. If set, images are put as html img tag.
* `--disable-image` disable the image extraction
* `--disable-escaping` do not attempt to escape special characters
* `--disable-wmf` keep wmf formatted image untouched (avoid exceptions under linux)
* `--disable-color` disable color tags in HTML
* `--min-block-size [size]` the minimum number of characters for a text block to be outputted
* `--wiki` / `--mdk` if you happen to be using tiddlywiki or madoko, this argument outputs the corresponding markup language


## References

<https://qiita.com/akihiro_suto/items/44742fd5881f4d159c8a>
