import { Octokit } from 'octokit';
import { GithubApiKey } from '../../utils/environment';

/**
 * Initializes a new Octokit client for making Github API calls.
 */
const octokit = new Octokit({ auth: GithubApiKey });