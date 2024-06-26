export type ContributorData = {
  project_web_url: string;
  project_default_branch: string;
  name: string;
  email: string;
  avatar_url: string;
};

export type ProjectData = {
  id: string;
  description: string;
  name: string;
  http_url_to_repo: string;
  default_branch: string;
};

export type MergeRequest = {
  id: string;
  project_id: string;
  state: string;
  project_name?: string;
  created_date: string;
  author: {
    username: string;
  };
  title: string;
  created_at: string;
  merged_at: string;
  updated_at: string;
  closed_at: string;
  web_url: string;
};

export type PipelineObject = {
  id: string;
  project_id: string;
  ref: string;
  status: string;
  web_url: string;
  project_name: string;
  onRestartClick: () => void;
  created_at: string;
  updated_at: string;
};

export type ConfStorgeValue = {
  value: string,
  representation: string,
}

export type ConfBodyStorge = {
  storage: ConfStorgeValue,
}

export type ConfObject = {
  id: string,
  type: string,
  status: string,
  title: string,
  body: ConfBodyStorge
}

export type IssueObject = {
  id: string;
  project_name: string;
  project_id: string;
  title: string;
  state: IssueState;
  type: IssueType;
  description: string;
  created_at: string;
  updated_at: string;
  author: Author;
  web_url: string;
};

type Author = {
  id: string;
  username: string;
  name: string;
  avatar_url: string;
  web_url: string;
};

export type MergeRequestState = 'opened' | 'closed' | 'all';

export type IssueState = 'opened' | 'closed';

export type IssueType = 'issue' | 'incident' | 'test_case';

export type ProjectIDAndName = {
  id: string; // project ID
  name: string; // project Name
};
