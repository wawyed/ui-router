/** The context ref can be anything that has a `parent` reference to another IContextRef */
export interface IContextRef {
  parent: IContextRef
}

/** This interface is exported and used elsewhere in the View code */
export interface IViewContext extends IContextRef {
  eq: (IViewContext) => boolean;
  getParent: () => IViewContext;
}
