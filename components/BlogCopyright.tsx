const BlogCopyright = ({ notionPost }) => {
    const publishDomain = typeof window !== 'undefined' ? window.location.origin : 'https://react-notion-blog.demo.harisfox.com';

    return (
        <div id='notion-blog-copyright' className='my-3 mx-auto md:w-3/5 leading-relaxed'>
            <div className='rounded border-2 p-3 space-y-3 dark:text-[#adbac7]'>
                <div id='notion-blog-copyright-header'>
                    <div id='notion-blog-copyright-title'>
                        <span>{notionPost.title}</span>
                    </div>
                    <div id='notion-blog-copyright-url'>
                        <span>
                            <a
                                href={`${publishDomain}/posts/${notionPost.slug}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                {publishDomain}/posts/{notionPost.slug}
                            </a>
                        </span>
                    </div>
                </div>
                <div id='notion-blog-copyright-body' className='flex flew-row space-x-3'>
                    <div id='notion-blog-copyright-author' className='flex flex-col'>
                        <span>Author</span>
                        {notionPost.author.map((author) => (
                            <div key={author.id}>
                                <span className='flex flex-col'>
                                    <span>{author.fullName}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div id='notion-blog-copyright-date' className='flex flex-col'>
                        <span>Published Date</span>
                        <span>{notionPost.date}</span>
                    </div>
                    <div id='notion-blog-copyright-license' className='flex flex-col'>
                        <span>License</span>
                        <span>
                            <a
                                href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                CC BY-NC-SA 4.0
                            </a>
                        </span>
                    </div>
                </div>
                <div id='notion-blog-copyright-footer'>
                    <p id='notion-blog-copyright-reminder' className='text-sm'>
                        When reposting, sharing or citing this article, please abide by the license agreement and indicate the source of the article.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCopyright;
