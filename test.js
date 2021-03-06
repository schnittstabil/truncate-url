import test from 'ava';
import fn from './';

test('should truncate url', t => {
	t.is(fn('http://sindresorhus.com/foo/bar/baz/faz', 30), 'http://sindresorhus.com/…/faz');
	t.is(fn('http://example.com/a/cool/page/that-is-really-deeply/nested/', 40), 'http://example.com/…/nested/');
	t.is(fn('http://example.com/a/b/c/d', 24).length, 24);
	t.is(fn('http://example.com/a/b/c', 24), 'http://example.com/a/b/c');
	t.is(fn('http://example.com/a/b/cd', 24), 'http://example.com/…/cd');
});

test('should pass corner case', t => {
	const result = fn('http://example.com/a/b/cd', 24);
	t.true(result.length <= 24, result + ' is > 24');
});
