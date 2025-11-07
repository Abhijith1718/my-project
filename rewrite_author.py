def callback(commit, metadata):
    if commit.author_name == b"ADI-MB-05":
        commit.author_name = b"Abhijith1718"
        commit.author_email = b"abhijithnambrath1718@gmail.com"
    if commit.committer_name == b"ADI-MB-05":
        commit.committer_name = b"Abhijith1718"
        commit.committer_email = b"abhijithnambrath1718@gmail.com"
    return commit