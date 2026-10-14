import { useState } from 'react';
import './post.css';

function Post() {
    const [postType, setPostType] = useState('Question');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [abstract, setAbstract] = useState('');
    const [articleText, setArticleText] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setError([]);
        setSuccess('');

        const tagList = tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        const missingFields = [];

        if (!title.trim()) {
            missingFields.push('Title');
        }

        if (postType === 'Question' && !description.trim()) {
            missingFields.push('Description');
        }

        if (postType === 'Article' && !abstract.trim()) {
            missingFields.push('Abstract');
        }

        if (postType === 'Article' && !articleText.trim()) {
            missingFields.push('Article Text');
        }

        if (tagList.length === 0) {
            missingFields.push('Tags');
        }

        const errors = [];

        if (
            (postType === 'Question' && missingFields.length === 3) ||
            (postType === 'Article' && missingFields.length === 4)
        ) {
            errors.push('Please fill in all the fields.');
        } else if (missingFields.length > 0) {
            const lastField = missingFields[missingFields.length - 1];
            const otherFields = missingFields.slice(0, -1);

            const fieldNames = otherFields.length > 0
                ? `${otherFields.join(', ')} and ${lastField}`
                : lastField;

            errors.push(
                missingFields.length === 1
                    ? `Please fill in the ${lastField} field.`
                    : `Please fill in the ${fieldNames} fields.`
            );
        }

        if (tagList.length > 3) {
            errors.push('You can enter a maximum of 3 tags.');
        }

        const uniqueTags = new Set(
            tagList.map(tag => tag.toLowerCase())
        );

        if (uniqueTags.size !== tagList.length) {
            errors.push('Please remove duplicate tags.');
        }

        if (errors.length > 0) {
            setError(errors);
            return;
        }

        setSuccess('Your post has been submitted successfully!');

        setTitle('');
        setDescription('');
        setAbstract('');
        setArticleText('');
        setTags('');
    }

    return (
        <main className="post-container">
            <h1>New Post</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Select Post Type</legend>

                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="Question"
                            checked={postType === 'Question'}
                            onChange={() => {
                                setPostType('Question');
                                setTitle('');
                                setTags('');
                                setError([]);
                                setSuccess('');
                            }}
                        />
                        Question
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="postType"
                            value="Article"
                            checked={postType === 'Article'}
                            onChange={() => {
                                setPostType('Article');
                                setTitle('');
                                setTags('');
                                setError([]);
                                setSuccess('');
                            }}
                        />
                        Article
                    </label>
                </fieldset>

                <h2>What do you want to ask or share?</h2>

                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Enter a descriptive title"
                />

                {postType === 'Question' ? (
                    <>
                        <label htmlFor="description">
                            Describe your problem
                        </label>

                        <textarea
                            id="description"
                            value={description}
                            onChange={event =>
                                setDescription(event.target.value)
                            }
                            placeholder="Explain your question"
                        />
                    </>
                ) : (
                    <>
                        <label htmlFor="abstract">Abstract</label>

                        <textarea
                            id="abstract"
                            value={abstract}
                            onChange={event =>
                                setAbstract(event.target.value)
                            }
                            placeholder="Enter a short abstract"
                        />

                        <label htmlFor="articleText">Article Text</label>

                        <textarea
                            id="articleText"
                            value={articleText}
                            onChange={event =>
                                setArticleText(event.target.value)
                            }
                            placeholder="Write your article"
                        />
                    </>
                )}

                <label htmlFor="tags">Tags</label>
                <input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={event => setTags(event.target.value)}
                    placeholder="Enter up to 3 comma-separated tags"
                />

                {error.length > 0 && (
                    <ul className="error-message">
                        {error.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))}
                    </ul>
                )}

                {success && (
                    <p className="success-message">{success}</p>
                )}

                <button type="submit">Post</button>
            </form>
        </main>
    );
}

export default Post;