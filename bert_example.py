pip install -r requirements.txt
from sentence_transformers import SentenceTransformer

# Load a pre-trained BERT model
model = SentenceTransformer('bert-base-nli-mean-tokens')

# Sentences to be encoded
sentences = [
    "This is an example sentence.",
    "Each sentence is converted to a vector.",
    "The vectors represent the meaning of the sentences."
]

# Encode the sentences into embeddings
embeddings = model.encode(sentences)

# Print the embeddings
for sentence, embedding in zip(sentences, embeddings):
    print("Sentence:", sentence)
    print("Embedding:", embedding)
    print()
